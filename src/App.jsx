import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/core/DashboardPage";
import BookCatalogPage from "./pages/bookCatalog/BookCatalogPage";
import BookIssuePage from "./pages/bookIssue/BookIssuePage";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserAccountlistPage from "./pages/UserAcc/UserAccountlistPage";
import AppLayout from "./components/AppLayout";
import UserAccountPage from "./pages/UserAcc/UserAccountPage";
import MemberPage from "./pages/member/MemberPage";
import Viewbookcatalog from "./pages/bookCatalog/ViewBookCatalog";
import CreateBookCatalog from "./pages/bookCatalog/CreateBooksCatalog";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user-account">
          <Route index element={<UserAccountlistPage />} />
          <Route path=":id" element={<UserAccountPage />} />

        </Route>
        <Route path="/book-catalog" element={<BookCatalogPage />} />
        <Route path="/book-catalog/:id" element={<Viewbookcatalog />} />
        <Route path="/book-issue" element={<BookIssuePage />} />
        <Route path="/book-catalog/create" element={<CreateBookCatalog />} />        
          <Route path="/book-issue" element={<BookIssuePage />} />
        <Route path="/member" element={<MemberPage />} />
      </Route>
    </Routes>
  );
}
export default App;
