interface User {
	name: string;
	avatar: string;
}

interface AvatarProps {
	user: User;
}

export function Avatar({ user }: AvatarProps) {
	return (
		<div className="flex flex-row p-4 items-center gap-4">
			<img
				src={user.avatar}
				alt=""
				className="size-10 rounded-full ring-2 ring-secondary outline outline-offset-2 outline-secondary/50"
			/>
			<div className="text-lg text-secondary font-sans">Ahlan, {user.name}</div>
		</div>
	);
}
