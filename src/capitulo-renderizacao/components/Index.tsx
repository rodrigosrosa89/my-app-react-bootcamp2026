interface Props {
  name: string;
  check?: boolean;
}

const Item: React.FC<Props> = ({ name, check = false }) => {
  // Primeira opção com IF e return
  //   if (check) {
  //     return (
  //       <div className="item">
  //         <p>Nome: {name}</p>
  //       </div>
  //     );
  //   }

  return (
    <>
      {(name || check) && (
        <div className="item">
          <p>Nome: {name}</p>
        </div>
      )}
    </>
  );
};

export default Item;
