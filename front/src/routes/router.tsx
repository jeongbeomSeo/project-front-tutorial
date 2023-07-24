/*
Loader
loader는 아래 내용만 기억하면 된다

로더의 호출 시점은 컴포넌트가 렌더링되기 전이다
각 route 파일에 loader라는 함수를 만든뒤 이를 export하여 사용하는것이 일반적이다
loader함수가 값을 리턴하면 useLoaderData()로 컴포넌트에서 데이터를 받을 수 있다
GET요청을 하면 Loader가 호출된다
*/

import { fetchAllUser } from "../services/user";

export async function loader() {
  const users = await fetchAllUser();
  return users;
}
