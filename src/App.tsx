import Contador from "./components/Contador";

const App = () => {
  return (
    <main className="flex flex-1 flex-col items-center gap-6 p-8 justify-center">
      <h1>Contador</h1>
      <Contador numeroInicial={0} />
    </main>
  );
};

export default App;
