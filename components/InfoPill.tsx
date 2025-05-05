const InfoPill = ({ text, image, className = '' }: InfoPillProps) => {
  return (
    <figure className='info-pill items-start'>
      <img src={image} alt={text} className='mt-1' />
      <figcaption className={className}>{text}</figcaption>
    </figure>
  );
};

export default InfoPill;
