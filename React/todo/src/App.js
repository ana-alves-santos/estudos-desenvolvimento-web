// Importa os estilos do App
import "./App.css"; 

// Importa hooks do React
import { useEffect, useState } from "react";

// Importa ícones para marcar tarefas feitas e deletar
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

// URL da API que vamos usar para salvar e buscar as tarefas
const API = "https://didactic-sniffle-wpjqvj4w7wrfggqq-5000.app.github.dev";

// Componente principal do App
function App() {
  // Estado para guardar o título da nova tarefa
  const [title, setTitle] = useState("");

  // Estado para guardar o tempo estimado da tarefa
  const [time, setTime] = useState("");

  // Estado para guardar a lista de tarefas
  const [todos, setTodos] = useState([]);

  // Estado para mostrar se os dados estão carregando
  const [loading, setLoading] = useState(false);

  // useEffect executa uma função quando o componente carrega
  useEffect(() => {
    const loadData = async () => {
      setLoading(true); // Começa a mostrar carregamento

      // Faz a requisição GET para buscar todas as tarefas
      const res = await fetch(API + "/todos")
        .then((res) => res.json()) // transforma a resposta em JSON
        .then((data) => data)     // pega os dados
        .catch((err) => err);     // trata erro

      setLoading(false); // termina de mostrar carregamento

      setTodos(res); // salva os dados no estado
    };

    loadData(); // chama a função de carregamento
  }, []); // [] significa que executa só uma vez quando o App carrega

  // Função chamada quando o formulário é enviado
  const handleSubmit = async (e) => {
    e.preventDefault(); // evita que a página recarregue

    // Cria um objeto com os dados da tarefa
    const todo = {
      id: Math.random(), // gera um id aleatório
      title,             // título da tarefa
      time,              // tempo da tarefa
      done: false,       // status inicial: não feita
    };

    // Envia a tarefa para a API
    await fetch(API + "/todos", {
      method: "POST",                // tipo de requisição
      body: JSON.stringify(todo),    // converte para JSON
      headers: {
        "Content-Type": "application/json", // informa que é JSON
      },
    });

    // Atualiza a lista de tarefas no estado, adicionando a nova
    setTodos((prevState) => [...prevState, todo]);

    // Limpa os campos do formulário
    setTitle("");
    setTime("");
  };

  // Função para marcar a tarefa como feita ou desmarcar
  const handleDone = async (todo) => {
    todo.done = !todo.done; // muda o status da tarefa

    // Atualiza a tarefa na API
    const data = await fetch(API + "/todos/" + todo.id, {
      method: "PUT",                 // atualização
      body: JSON.stringify(todo),    
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Atualiza a lista de tarefas localmente
    setTodos((prevState) =>
      prevState.map((t) => (t.id === data.id ? (t = data) : t))
    );
  };

  // Função para deletar uma tarefa
  const handleDelete = async (id) => {
    // Deleta da API
    await fetch(API + "/todos/" + id, {
      method: "DELETE",
    });

    // Atualiza a lista removendo a tarefa deletada
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  // Mostra carregando se estiver buscando dados
  if (loading) {
    return <p>Carregando...</p>;
  }

  // JSX do App
  return (
    <div className="App">
      {/* Cabeçalho */}
      <div className="todo-header">
        <h1>React Todo</h1>
      </div>

      {/* Formulário para adicionar tarefas */}
      <div className="form-todo">
        <h2>Insira sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          {/* Campo título */}
          <div className="form-control">
            <label htmlFor="title">O que você vai fazer?</label>
            <input
              type="text"
              name="title"
              placeholder="Título da tarefa"
              onChange={(e) => setTitle(e.target.value)} // atualiza estado ao digitar
              value={title} // valor atual do estado
              required
            />
          </div>

          {/* Campo tempo estimado */}
          <div className="form-control">
            <label htmlFor="time">Duração:</label>
            <input
              type="text"
              placeholder="Tempo estimado (em horas)"
              onChange={(e) => setTime(e.target.value)}
              value={time}
              required
            />
          </div>

          <input type="submit" value="Criar Tarefa" />
        </form>
      </div>

      {/* Lista de tarefas */}
      <div className="list-todo">
        <h2>Lista de tarefas:</h2>
        {/* Se não tiver tarefas */}
        {todos.length === 0 && <p>Não há tarefas!</p>}

        {/* Mapeia cada tarefa */}
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            {/* Título da tarefa, riscado se estiver feita */}
            <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
            <p>Duração: {todo.time}h</p>

            {/* Botões de ação */}
            <div className="actions">
              {/* Botão marcar/desmarcar */}
              <span onClick={() => handleDone(todo)}>
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>

              {/* Botão deletar */}
              <BsTrash onClick={() => handleDelete(todo.id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;
