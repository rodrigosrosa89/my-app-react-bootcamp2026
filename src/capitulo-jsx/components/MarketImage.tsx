interface ImageOptions {
  source: string;
  alternative: string;
  width: number;
  style?: React.CSSProperties;
}

export function MarketImage() {
  const imageOptions: ImageOptions = {
    source: "https://www.w3schools.com/w3images/mac.jpg",
    alternative: "Imagem da feira exemplo",
    width: 500,
    style: {
      borderRadius: "10px",
    },
  };

  const { source, alternative, width, style } = imageOptions;
  return (
    <img src={source} alt={alternative} width={`${width}px`} style={style} />
  );
}
