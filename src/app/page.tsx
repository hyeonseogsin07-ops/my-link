export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-950">
      <div className="w-full max-w-md p-8 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center text-3xl font-bold border-2 border-blue-500/20">
            신
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-zinc-50">
            신현석
          </h1>
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
            대학생 / 바이브 코딩
          </p>
        </div>
        <p className="text-gray-600 dark:text-zinc-300 leading-relaxed text-base">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>
      </div>
    </main>
  );
}
