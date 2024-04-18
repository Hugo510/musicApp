export default function HomePageNo() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
			try {
				const response = await fetch('http://192.168.1.20:3000/datos');
				const json = await response.json();
				console.log(json);
				if (json.length > 0) {
					setUserData(json[0]); // Accede al primer elemento del array
				}
			} catch (error) {
				console.error('Error al cargar los datos del usuario:', error);
			}
		};
		

        fetchUserData();
    }, []);
    
    return (
        <SafeAreaView 
			style = {{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#000000",
					borderRadius: 63,
					paddingTop: 33,
					shadowColor: "#000000C4",
					shadowOpacity: 0.8,
					shadowOffset: {
					    width: 0,
					    height: 4
					},
					shadowRadius: 61,
					elevation: 61,
				}}>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 1,
						marginHorizontal: 24,
					}}>
						{userData && (
                <View style={styles.headerContainer}>
                    <Text style={styles.welcomeText}>Hola, {userData.firstName}!</Text>
                    <Text style={styles.userInfo}>
                        Email: {userData.email}{"\n"}
                        Edad: {userData.age} años
                    </Text>
                </View>
            )}
					<Text 
						style = {{
							fontSize: 24,
						}}>
						{"Hi Hugo"}
					</Text>
					<View 
						style = {{
							width: 24,
						}}>
						<View 
							style = {{
								backgroundColor: "#DFEFF0",
								marginBottom: 8,
							}}>
						</View>
						<View 
							style = {{
								backgroundColor: "#DFEFF0",
								marginBottom: 7,
								marginHorizontal: 1,
							}}>
						</View>
						<View 
							style = {{
								backgroundColor: "#DFEFF0",
								marginHorizontal: 1,
							}}>
						</View>
					</View>
				</View>
				<Text 
					style = {{
						color: "#DFEFF0",
						fontSize: 10,
						marginBottom: 17,
						marginHorizontal: 22,
					}}>
					{"Explora tu musica favorita"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#232728",
						borderRadius: 10,
						paddingVertical: 16,
						paddingHorizontal: 14,
						marginBottom: 19,
						marginHorizontal: 20,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 15,
							height: 15,
							marginRight: 30,
						}}
					/>
					<Text 
						style = {{
							color: "#ECECEC",
							fontSize: 16,
						}}>
						{"Artista, Albúm, Música"}
					</Text>
					<View 
						style = {{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 14,
							height: 20,
						}}
					/>
				</View>
				<ImageBackground 
					source={{uri:'https://i.imgur.com/1tMFzp8.png'}} 
					resizeMode = {'stretch'}
					imageStyle = {{borderRadius: 17.8217830657959,}}
					style = {{
						marginBottom: 12,
						marginHorizontal: 69,
					}}
					>
					<View 
						style = {{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: "#FFFFFF1A",
							borderBottomRightRadius: 17,
							borderBottomLeftRadius: 17,
							paddingVertical: 7,
							paddingLeft: 32,
							paddingRight: 5,
							marginTop: 193,
						}}>
						<Text 
							style = {{
								color: "#FEFEFE",
								fontSize: 11.88118839263916,
								width: 46,
							}}>
							{"Avisáme Siempre"}
						</Text>
						{/* <LinearGradient 
							start={{x:0, y:0}}
							end={{x:0, y:1}}
							colors={["#2A4259", "#070F17"]}
							style = {{
								width: 102,
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								borderRadius: 31.542858123779297,
								padding: 8,
							}}> */}
							<Text 
								style = {{
									color: "#FEFEFE",
									fontSize: 14.257426261901855,
								}}>
								{"Inicia Aquí"}
							</Text>
							<Image
								source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style = {{
									width: 13,
									height: 13,
								}}
							/>
						{/* </LinearGradient> */}
					</View>
				</ImageBackground>
				<View 
					style = {{
						backgroundColor: "#C2FAF1",
						marginBottom: 7,
						marginHorizontal: 22,
					}}>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 18,
						marginHorizontal: 25,
					}}>
					<Text 
						style = {{
							color: "#FFFFFF",
							fontSize: 20,
							marginRight: 4,
							flex: 1,
						}}>
						{"Escúchalo Ahora"}
					</Text>
					<Text 
						style = {{
							color: "#FFFFFF",
							fontSize: 12,
							marginRight: 1,
						}}>
						{"Ver Todo"}
					</Text>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 5,
							height: 10,
						}}
					/>
				</View>
				<ScrollView 
					horizontal 
					style = {{
						flexDirection: "row",
						marginBottom: 8,
						marginHorizontal: 22,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 16,
							width: 136,
							height: 116,
							marginRight: 18,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 16,
							width: 136,
							height: 116,
							marginRight: 18,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							borderRadius: 16,
							width: 136,
							height: 116,
						}}
					/>
				</ScrollView>
				<Text 
					style = {{
						marginHorizontal: 1,
					}}>
					{"52 Ka Daman\nRenuka Pawar"}
				</Text>
				<Text 
					style = {{
						marginHorizontal: 30,
					}}>
					{"Filhall\nB Park-Filhall"}
				</Text>
				<Text 
					style = {{
						marginHorizontal: 142,
					}}>
					{"Ranjha\nB Park-Ranhja"}
				</Text>
				<View 
					style = {{
						borderColor: "#C2FAF1",
						borderWidth: 1,
						marginBottom: 9,
						marginHorizontal: 22,
					}}>
				</View>
				<Text 
					style = {{
						color: "#FFFFFF",
						fontSize: 20,
						marginBottom: 16,
						marginHorizontal: 24,
					}}>
					{"Artistas"}
				</Text>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 8,
						marginHorizontal: 21,
					}}>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 101,
							height: 101,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 101,
							height: 101,
						}}
					/>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 101,
							height: 101,
						}}
					/>
				</View>
				<View 
					style = {{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 17,
						marginHorizontal: 38,
					}}>
					<Text 
						style = {{
							color: "#DFEFF0",
							fontSize: 12,
						}}>
						{"Arjit Singh"}
					</Text>
					<Text 
						style = {{
							color: "#DFEFF0",
							fontSize: 12,
						}}>
						{"Justin Bieber"}
					</Text>
					<Text 
						style = {{
							color: "#DFEFF0",
							fontSize: 12,
						}}>
						{"Honey Singh"}
					</Text>
				</View>
				<View 
					style = {{
						backgroundColor: "#000000",
						paddingVertical: 14,
						paddingHorizontal: 39,
					}}>
					<View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 3,
						}}>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 20,
								height: 19,
							}}
						/>
						<View 
							style = {{
								flex: 1,
								alignSelf: "stretch",
							}}>
						</View>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 20,
								height: 17,
								marginRight: 80,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 14,
								height: 17,
								marginRight: 67,
							}}
						/>
						<Image
							source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style = {{
								width: 20,
								height: 21,
							}}
						/>
					</View>
					<Image
						source = {{uri:"https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style = {{
							width: 4,
							height: 4,
						}}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
		
    )
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "#000000",
        borderRadius: 30,
        paddingTop: 20,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: width * 0.05, // 5% of screen width
		backgroundColor: "#fff",
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000', // Assuming white text on a black background for contrast
    },
    userInfo: {
        fontSize: 14,
        color: '#000',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    checkbox: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFF',
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: '#FFF',
    },
    checkboxIcon: {
        color: '#000',
    },
    mainScrollView: {
        flex: 1,
        backgroundColor: "#000000",
        borderRadius: 63,
        paddingTop: 33,
        shadowColor: "#000000C4",
        shadowOpacity: 0.8,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 61,
        elevation: 61,
    },
    // Más estilos aquí
});
