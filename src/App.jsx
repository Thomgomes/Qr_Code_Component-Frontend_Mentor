import { Card } from "./components/card";
import { ThomtyError } from "./components/thomty";

export default function App() {
  return (
    <div className="w-screen h-screen bg-Light-Gray">
      <div className="w-32 absolute">
        <ThomtyError/>
      </div>
      <div className="flex w-full h-full justify-center items-center">
        <Card />
      </div>
    </div>
  );
}
