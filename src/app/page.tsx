import Board from "@/components/board";

export default function Home() {
  return (
    <main className="font-Lilita_One w-full min-h-screen flex flex-col items-center bg-stone-300">
      <h1 className="text-4xl text-teal-600 p-10">Tic Tac Toe Game</h1>
      <div className="flex flex-col items-center space-y-6">
        <Board />
        <div className="text-lg text-gray-700 mt-8">
          Made with ❤️ by: <span className="font-bold text-teal-600">Ahmad</span>
        </div>
      </div>
    </main>
  );
}
