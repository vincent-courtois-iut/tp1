import data from "@/conf/data.json"

export default function Scientists() {
  return (
    <div>
      <h1>Scientifiques</h1>
      <ul>
        {data.map(scientist => {
          return (
            <li>{scientist.firstname} {scientist.lastname} - {scientist.job}</li>
          );
        })}
      </ul>
    </div>
  );
}