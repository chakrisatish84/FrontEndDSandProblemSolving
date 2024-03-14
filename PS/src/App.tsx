import "./App.css";
import QuizRoot from "./Components/quiz-app/components/quiz-root";
// import PhoneLoginForm from "./Components/otp-login/phone-login-form";

function App() {
  return (
    <div className="AppRoot">
      {/* OTP Login    */}
      {/* <PhoneLoginForm /> */}
      <QuizRoot />
    </div>
  );
}

export default App;
