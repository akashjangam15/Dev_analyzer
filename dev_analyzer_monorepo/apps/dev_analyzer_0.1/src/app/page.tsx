import Image from "next/image";
import {formatDate} from "@myapp/utils"

export default function Home() {
  return (<>
    <h1>Welcome to dev_analyzer</h1>
    <h3>{formatDate(new Date())}</h3>
  </>
  );
}
