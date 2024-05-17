import { Text, ScrollView, StyleSheet, View} from 'react-native';
import InfoItem from '../InfoItem';

export default function TribalGovernmentScreen() {
	return (
		<ScrollView>
			<View>
				<View style={{
					paddingTop:20,
					paddingLeft:10,
					display:'flex',
					alignItems:"flex-start",
				}}>
					<Text style={{ 
							fontSize: 24, 
							fontWeight: 'bold',
							color: 'rgba(5, 16, 101, 1)',
						}}>Resources from Your Tribal Government
					</Text>

				</View>
				<InfoItem description={"Get To Know Your Council"} image={"favicon.jpeg"} url={"https://www.colvilletribes.com/get-to-know-your-council"}/>
				<InfoItem description={"Centralized Services"} image={"centralized-services.webp"} url={"https://www.colvilletribes.com/centralized-services"}/>
				<InfoItem description={"Tribal Health"} image={"tribal-health.jpeg"} url={"https://www.cct-hhs.com/tribal-health"}/>
			</View>
		</ScrollView>
	);
}