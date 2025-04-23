import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
    <h1 className="text-4xl font-bold mb-4">🧠 QuizMeGPT</h1>
    <p className="text-lg">Get AI-generated quizzes on any topic.</p>
    <button className="mt-6 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white">
      Start Quiz
    </button>
  </main>
  );
}
