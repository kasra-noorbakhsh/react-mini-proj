import * as yup from "yup";

yup.addMethod(yup.number, "compareMinMax", function(errorMassege) {
    return this.test("compareMinMax", errorMassege, function(val) {
        const { path, createError } = this;
        const max = this.resolve(yup.ref("maxPrice"));
        return (max < 0) || val < max || createError({ path, message: errorMassege || "min max validation failed" });
    });
});

export const schema = yup.object().shape({
    symbol: yup.string().transform((value, originalValue) => {
        return (originalValue === "") ? null: value
    }).min(3, "حداقل طول نماد رعایت نشده است").max(6, "حداکثر طول نماد رعایت نشده است").nullable(true),

    company: yup.string(),

    maxPrice: yup.number().transform((value, originalValue) => {
        return (originalValue === "") ? Infinity: value
    }).min(0, "عدد وارد شده منفی است").nullable(true),

    minPrice: yup.number().min(0, "عدد وارد شده منفی است").transform((value, originalValue) => {
        return (originalValue === "") ? 0: value
    }).compareMinMax("حداقل قیمت از حداکثر قیمت بیشتر است").nullable(true),

    industry: yup.string()
})