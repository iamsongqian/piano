import { List, Icon } from "antd"
import {  useEffect } from "react"
import axios from "axios";

const listData = []
for (let i = 0; i < 11123; i++) {
	listData.push({
		href: "",
		title: `here is title ${i}`,
		avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
		description: " here is description",
		content: "here is content",
	})
}

const IconText = ({ type, text }) => (
	<span>
		<Icon type={type} style={{ marginRight: 8 }} />
		{text}
	</span>
)

const MainContext = () => {
	useEffect(() => {
		axios({ url: "/top/song?type=96", withCredentials: true })
			.then(res => console.log(res.data))
			.catch(err => console.log(err))
})
	return (
		<List
			itemLayout="vertical"
			size="large"
			pagination={{
				onChange: page => {
					console.log(page)
					var rubbish = document.getElementsByClassName("ant-list-pagination")
					Math.round(listData.length / 5) === page
						? (rubbish[0].style.marginTop = "22rem")
						: (rubbish[0].style.marginTop = "1.5rem")
					window.scrollTo(0, 0)
				},
				pageSize: 5,
				hideOnSinglePage: true,
			}}
			dataSource={listData}
			renderItem={item => (
				<List.Item
					key={item.title}
					actions={[
						<IconText type="star-o" text="0" key="list-vertical-star-o" />,
						<IconText type="like-o" text="0" key="list-vertical-like-o" />,
						<IconText type="message" text="0" key="list-vertical-message" />,
					]}>
					<List.Item.Meta
						title={<a href={item.href}>{item.title}</a>}
						description={item.description}
					/>
					{item.content}
				</List.Item>
			)}
		/>
	)
}
export default MainContext