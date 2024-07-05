
export function ProfileCard({
  username,
  email,
  phone,
}: {
  username: string;
  email: string;
  phone?: string;
}) {
  return (
    <div className="flex flex-col gap-2 pt-3">
      <KeyValue label="Name" value={username}  />
      <KeyValue label="Email" value={email} showVerified={true} />
      {
        phone && <KeyValue label="Phone" value={phone} />
      }
    </div>
  );
}

function KeyValue({ label, value, showVerified }: { label: string; value: string, showVerified?: boolean}) {
  return <>
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">{label}</p>
        <p className="">{value}</p>
      </div>
        {showVerified &&
      <div>
        <div className="py-0.5 px-2 rounded-full text-sm bg-gray-300">Verified</div>
      </div>
        }
    </div>
    <hr className="border-slate-300" />
  </>
}