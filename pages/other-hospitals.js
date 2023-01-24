import Link from "next/link";
import { useQuery } from "react-query";
import { getHospitals } from '../api'
import { useABStore } from '../store'

export default function OtherHospitalsPage() {
  const {experiments, addExperiment} = useABStore();
  const { data, status } =
    useQuery(
      ["hospitals"],
      () => getHospitals()
    );

  return (
    <div>
      <h3>Other hospitals</h3>

      <p>Status: {status}</p>

      <p>Data:</p>
      {JSON.stringify(data)}

      <br />
      <Link href="/hospitals" legacyBehavior>
        Go to Main Hospitals Page
      </Link>

      <hr />

      <p>Experiments:</p>
      {new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(
        experiments,
      )}
      <br />
      
      <button onClick={() => addExperiment(`ab_${Date.now()}`)}>add experiment</button>
    </div>
  );
}
