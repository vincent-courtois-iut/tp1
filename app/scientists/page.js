import data from "@/conf/data.json"
import List from "@/components/List"

const sc = [{ firstname: "foo", lastname: "bar", job: "None" }]

export default function Scientists() {
  return (
    <div>
      <h1>Scientifiques</h1>
      <List scientists={data} />
      <List scientists={sc} />
    </div>
  );
}