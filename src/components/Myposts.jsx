import { useState, useEffect } from "react";
import GetData from "./GetData";
import DeleteButton from "./DeleteButton";
function Myposts() {
  const dataPile = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
  ];
  const [data, setData] = useState([dataPile]);
  let dataLength = data.length;
  useEffect(() => {
    setData(dataPile);
  }, []);
  function handleSubmit(d) {
    setData([...data, d]);
    console.log(data);
  }
  function deltelHandler(id) {
    let itemToBeDeleted = data.find((i) => i.id === id);
    // console.log(itemToBeDeleted);
    let newArray = data.filter((i) => {
      return i.id !== id;
    });
    console.log(newArray);
    setData(newArray);
  }
  return (
    <>
      <GetData dataLength={dataLength} onSubmit={(d) => handleSubmit(d)} />
      <div>
        {data.map((i, index) => (
          <div
            key={index}
            style={{
              border: "1px solid white",
              padding: "1%",
              marginBottom: "1%",
            }}
          >
            <h1>{i.id}</h1>
            <h4>{i.title}</h4>
            <p>{i.body}</p>

            <DeleteButton
              buttonName={"delete"}
              id={i.id}
              sendingId={(id) => deltelHandler(id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Myposts;
