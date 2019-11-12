import '../../public/style/components/single-album.css'
const SingleAlbum = (props) => {
  return (
		<div className="single-album">
			<a
				className="album-icon"
        style={{ background: `url(${props.picUrl}?param=100y100)` }}
        href={`https://music.163.com/album?id=${props.id}`}
			/>
			<a className="album-text">{props.name}</a>

			<a className="album-text">{props.artist.name}</a>
		</div>
	)
}
export default SingleAlbum