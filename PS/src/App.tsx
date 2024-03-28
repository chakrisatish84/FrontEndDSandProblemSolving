import "./App.css";
// import QuizRoot from "./Components/quiz-app/components/quiz-root";
import { SelectableGrid } from "./Components/selectable-grid/Grid";
// import PhoneLoginForm from "./Components/otp-login/phone-login-form";

function App() {
  return (
    <div className="AppRoot">
      {/* OTP Login    */}
      {/* <PhoneLoginForm /> */}
      {/* <QuizRoot /> */}
      <SelectableGrid rows={10} cols={10} />
    </div>
  );
}

export default App;
