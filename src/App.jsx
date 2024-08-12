import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/core/DashboardPage";
import UserAccountPage from "./pages/userAccount/UserAccountPage";
import BookCatalogPage from "./pages/bookCatalog/BookCatalogPage";
import BookIssuePage from "./pages/bookIssue/BookIssuePage";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserAccountInfoPage from "./pages/userAccount/UserAccountInfoPage";
import CreateUserAccountPage from "./pages/userAccount/CreateUserAccountPage";
import AppLayout from "./components/AppLayout";
import MemberPage from "./pages/member/MemberPage";
import BookIssueForm from "./pages/bookIssue/CreateNewbookissue";
import CreateListAccount from "./pages/UserAcc/CreateListAccount";
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
        <Route index element ={<CreateListAccount/>}/>
          <Route index element={<UserAccountPage />} />
          <Route path=":id" element={<UserAccountInfoPage />} />
          <Route path="new" element={<CreateUserAccountPage />} />
        </Route>
        <Route path="/book-catalog" element={<BookCatalogPage />} />
        <Route path="/book-catalog/:id" element={<Viewbookcatalog />} />
        <Route path="/book-issue" element={<BookIssuePage />} />
        <Route path="/CreateNewBookIssue" element={<BookIssueForm />} />
        <Route path="/book-catalog/create" element={<CreateBookCatalog />} />        
          <Route path="/book-issue" element={<BookIssuePage />} />
        <Route path="/member" element={<MemberPage />} />
      </Route>
    </Routes>
  );
}

export default App;
