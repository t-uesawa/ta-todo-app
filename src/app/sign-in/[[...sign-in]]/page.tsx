import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className='flex justify-center items-center h-screen'>
			<SignIn
				fallbackRedirectUrl='/'
				appearance={{
					elements: {
						footer: { display: 'none' },
					},
					layout: {
						logoImageUrl: '/icons/todo_transparent.png'
					}
				}}
			/>
		</div>
	)
}