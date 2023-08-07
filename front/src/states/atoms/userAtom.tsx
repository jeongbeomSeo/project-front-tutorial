import { atom } from "recoil";
import { IUser } from "../../types/user";

// Object 객체 TypeScript에서 초기화 설정 해주는 방법
export const userState = atom<IUser>({
  key: "userState",
  default: {
    email: "",
    name: "",
    password: "",
    isManager: false,
  },
});
