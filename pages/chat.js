import {
	Box,
	Button,
	Text,
	TextField,
	Image,
} from "@skynexui/components";
import appConfig from "../config.json";
import React from "react";

export function TituloChat(props) { 
  
	const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
      ${Tag}{
      color: ${appConfig.theme.colors.secondary['600']};
			margin-top: 20px;
			margin-left: 150px;
      }
      `}</style>
			
    </>
    
  )
}


export default function PageChat() {
	const [chat, setChat] = React.useState([""]);
  

	return (
		<>
			<Box
				styleSheet={{
					display: "flex",
					flexDirection: "column",
					backgroundColor: appConfig.theme.colors.neutrals["400"],
					backgroundImage:
						"url(https://images.unsplash.com/photo-1553733322-5e506a6001b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundBlendMode: "multiply",
				}}
			>
				<TituloChat tag="h2">
				-	Chat Area -
				</TituloChat>
			
				<Box
					as=""
					className="ChatBox"
					styleSheet={{
						backgroundColor: appConfig.theme.colors.primary["200"],
						borderRadius: "8px",
						color: appConfig.theme.colors.neutrals["900"],
						maxWidth: "100%",
						minHeight: "400px",
						// marginTop: "50px",
						marginLeft: "50px",
						marginRight: "50px"
					}}
					tag="section"
				>
				</Box>
				<Box
					as=""
					className="ChatBox"
					styleSheet={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: appConfig.theme.colors.neutrals["300"],
						borderRadius: "8px",
						color: appConfig.theme.colors.neutrals["900"],
						maxWidth: "100%",
						minHeight: "90px",
						marginTop: "50px",
						marginLeft: "50px",
						marginRight: "50px"
					}}
					tag="section"
				>
					<TextField
					value={chat}
					onChange={function (event) {
						const valorChat = event.target.value;
						setChat(valorChat);
					}}
					placeholder="Placeholder text..."
					styleSheet={{
						alignSelf: "center",
						color: appConfig.theme.colors.neutrals["999"],
						backgroundColor: appConfig.theme.colors.primary["100"],
						width: "100%",
						minHeight: "45px",
						marginLeft: "20px",
						marginRight: "20px",
						borderRadius: "8px",
						border: "none"
					}}
					variant="basicBordered"
				/>
				 <Image
              styleSheet={{
								alignSelf: "center",
								marginRight: "20px",
								width: "60px",
								height: "60px",
                borderRadius: '10%',
               
              }}
              
              src={`https://cdn.pixabay.com/photo/2020/01/01/14/59/person-4733756_960_720.jpg`}
            />
				</Box>
				
			</Box>
		</>
	);
}
