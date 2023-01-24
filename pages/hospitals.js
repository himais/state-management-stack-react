import Link from "next/link";
import { useQuery } from "react-query";
import { getHospitals } from '../api'
import { useABStore } from '../store'

export default function HospitalsPage() {
  const {experiments, addExperiment} = useABStore();
  const { data, status } =
    useQuery(
      ["hospitals"],
      () => getHospitals()
    );

  return (
    <div>
      <h3>Hospitals</h3>

      <p>Status: {status}</p>

      <p>Data:</p>
      {JSON.stringify(data)}

      <br />
      <Link href="/other-hospitals" legacyBehavior>
        Go to other Hospitals
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
