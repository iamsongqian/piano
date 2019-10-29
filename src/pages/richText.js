import React from "react"
import { Button, Card, Modal } from "antd"
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import draftjs from "draftjs-to-html"
export default class RichText extends React.Component {
	state = {
		showRichText: false,
		editorContent: "",
		editorState: "",
	}

	handleClearContent = () => {
		this.setState({
			editorState: "",
		})
	}

	handleGetText = () => {
		this.setState({
			showRichText: true,
		})
	}

	onEditorChange = editorContent => {
		this.setState({
			editorContent,
		})
	}

	onEditorStateChange = editorState => {
		this.setState({
			editorState,
		})
	}

	render() {
		const { editorContent, editorState } = this.state
		return (
			<div className="richTextContainer">
				<Card style={{ marginTop: 10 }}>
					<Button type="primary" onClick={this.handleClearContent}>
						CLEAR
					</Button>
					<Button type="primary" onClick={this.handleGetText}>
						TRANSFER TO HTML
					</Button>
				</Card>
				<Card title="RichText Editor">
					<Editor
						editorState={editorState}
						onContentStateChange={this.onEditorChange}
						onEditorStateChange={this.onEditorStateChange}
					/>
				</Card>
				<Modal
					title="RichText"
					visible={this.state.showRichText}
					onCancel={() => {
						this.setState({
							showRichText: false,
						})
					}}
					footer={null}>
					{draftjs(editorContent)}
				</Modal>
			</div>
		)
	}
}
