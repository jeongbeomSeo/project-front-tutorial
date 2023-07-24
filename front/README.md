# Guideline

## 구조

- Root
- Each Navigation(Home, products, login, user)

## 기본 개념

- TypeScript
- JSX 문법
- Virtual Dom 작동 방식
- Component 기반
- Mutable Variable vs ImMutable Variable
- Hook

## 필요한 개념

- Styled Components
- React State Management(Recoil)
- ReactQuery
- React Hook Form
- ReactRouter

# React Router v6

- [React Router Document](https://reactrouter.com/en/main/routers/create-browser-router)
- [React Router v6.4 튜토리얼 배우기](https://lucky516.tistory.com/217)
- [[React] react router dom, RouterProvider와 CreateBrowserRouter](https://velog.io/@koyk0408/React-react-router-dom-RouterProvider%EC%99%80-CreateBrowserRouter)
- [[react]react-router-dom v6](https://velog.io/@onnuri/reactreact-router-dom-v6)
- [Feature Overview v6.14.2 | React Router](https://reactrouter.com/en/main/start/overview)

## 필요한 함수 및 개념

- CreateBrouserRouter
- errrorElement
- useNavigate
- Outlet
- NestedRouter
- loader

## 궁금증 미해결

- createBrowserRouter를 사용해서 children 안에 element부분에 다른 하위 url들을 가지고 있는 router를 넣어줄 수 있는가?
  - 확장성 및 코드 분리에 관한 문제

## 변화된 코드

```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// createRoutesFromElements를 사용해서 예전 방식(JSX로 Router Objects 구성)으로 구현
// You can do this:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

// Instead of this:
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
```
