import { LikeButton } from "./LikeButton";

interface Props {
  imageSource: string;
  alternative: string;
  user: string;
  text: string;
  onLikePost: React.ReactEventHandler<HTMLButtonElement>;
}

export function Post({
  imageSource,
  alternative,
  user,
  text,
  onLikePost,
}: Props) {
  return (
    <>
      <div className="post" onClick={() => alert("Teste 2")}>
        <img src={imageSource} alt={alternative} />

        <p>
          <b>Usuário: {user} </b>
          <p>{text}</p>
        </p>
        <LikeButton onLike={onLikePost} children="Dê seu like na postagem" />
      </div>
    </>
  );
}
