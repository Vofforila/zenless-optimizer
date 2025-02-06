interface CustomButtonProps {
	onPress: () => void;
	content: string;
	className: string;
}
export default function CustomButton({ onPress, content, className}:CustomButtonProps)
{
	return (
		<button className={className} onClick={onPress} name={content}>{content}</button>
	)
}