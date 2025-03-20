import { useState } from "preact/hooks";

interface GreetingProps {
  messages: string[];
}

const Greeting = ({ messages }: GreetingProps) => {
  const [greeting, setGreeting] = useState(messages[0]);

  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  return (
    <div>
      <h3>{greeting}！訪問いただきましてありがとう</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        新しい挨拶を追加
      </button>
    </div>
  );
};

export default Greeting;
