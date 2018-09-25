export interface MyProps {
  text: string;
  hello: string;
}
const list = (props: MyProps) => ({
  hello: props.hello,
  text: props.text
});

export { list };
