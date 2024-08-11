import { render } from '@testing-library/react'
import UserCard from './UserCard'

const sampleUserData = {
  name: "kasra",
  id: 10
}

describe(UserCard , () => {
  it("UserCard has the correct data from its userData props", () => {
    const {getByTestId} = render(<UserCard userData={sampleUserData}/>)
    const userNameValue = getByTestId("userName").textContent;
    expect(userNameValue).toBe("نام کاربری: kasra")
  })

})