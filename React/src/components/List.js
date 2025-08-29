//  componente funcional chamado "List"
const List = () => {
    // Definimos um array "items" com 3 objetos, cada um com id e name
    const items = [
        { id: 1, name: "Mateus" },
        { id: 2, name: "João" },
        { id: 3, name: "Pedro" },
    ];

    return (
      // Usamos <div> como "container" para os elementos
      <div> 
        {
          // Usamos .map() para percorrer o array "items"
          // Para cada item do array, o React vai criar um <p>
          items.map((item) => (
            // Cada <p> precisa ter a prop "key" com um valor único.
            // Aqui usamos o "id" do item como key.
            <p key={item.id}>
              {item.id} - {item.name}  {/* Mostramos id e nome */}
            </p>
          ))
        }
      </div>
    );
};


export default List;
