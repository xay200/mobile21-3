import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";

export default function PaymentScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="#5A6CF3" />
      </TouchableOpacity>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Checkout <FontAwesome name="credit-card" size={18} /></Text>
        <View>
          <Text style={styles.price}>₹ 1,527</Text>
          <Text style={styles.taxText}>Including GST (18%)</Text>
        </View>
      </View>
      
      {/* Payment Methods */}
      <View style={styles.paymentMethods}>
        <TouchableOpacity style={[styles.paymentButton, styles.selectedButton]}>
          <Text style={styles.paymentButtonText}>💳 Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonUnselectedText}><FontAwesome name="apple" size={24} color="black" />   Apple Pay</Text>

        </TouchableOpacity>
      </View>

      {/* Card Details */}
      <View style={styles.cardDetailsContainer}>
        <Text style={styles.label}>Card number</Text>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder="5261 4141 0151 8472" 
        keyboardType="numeric" 
      />
      <Image 
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/180px-Mastercard_2019_logo.svg.png" }} 
          style={styles.mastercardImage} 
        />
      
</View>
        <Text style={styles.label}>Cardholder name</Text>
        <TextInput style={styles.input} style={styles.inputContainer}  placeholder="Christie Doe" />

        <View style={styles.row}>
          <View style={styles.halfWidth}>
            <Text style={styles.label}>Expiry date</Text>
            <TextInput style={styles.input} style={styles.inputContainer} borderRadius={16} width={156} height={56} placeholder="06 / 2024" keyboardType="numeric" />
          </View>
          <View style={styles.halfWidth}>
        <View style={styles.cvvRow}>
          <Text style={styles.label} >CVV / CVC <MaterialIcons name="help-outline" size={16} color="gray" marginRight = {52} height={56} color ="green" /></Text>
          
        </View>
        <TextInput style={styles.input} style={styles.inputContainer} borderRadius={16} width={151} height={56} placeholder="915" keyboardType="numeric" secureTextEntry />
      </View>
          
        </View>
      </View>

      <Text style={styles.orderDetailsText}>
       We will send you an order details to your email after the successful payment
    </Text>

      {/* Pay Button */}
      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate("SuccessScreen")}>
        <Text style={styles.payButtonText}><FontAwesome name="lock" size={24} color="FFFFFF" />   Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 20, font: "Helvetica Now Display", letterSpacing: 0.03 },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 60,
    paddingTop: 100,
   
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#E8EAF6",
    padding: 8,
    borderRadius: 20,
    marginTop: 50,
    textAlign: "center"
  },
  headerTitle: { fontSize: 22, fontWeight: 700, width: 130, height: 32  },
  price: { fontSize: 22, fontWeight: "bold", color: "#25D482", textAlign: "right" },
  taxText: { color: "gray", fontSize: 12 },
  paymentMethods: { flexDirection: "row", justifyContent: "center", marginBottom: 10 },
  paymentButton: { flex: 1, padding: 12, alignItems: "center", borderRadius: 8, width: 170, height: 69,  },
  selectedButton: { backgroundColor: "#1DBF73" },
  paymentButtonText: { color: "white", fontWeight: 700, fontSize: 18 },
  paymentButtonUnselectedText: { color: "black", fontWeight: 700, fontSize: 18 },
  cardDetailsContainer: { backgroundColor: "white", padding: 20, borderRadius: 15 },
  label: { fontSize: 16, fontWeight: 700, color:"#3A3C3F", marginBottom: 5, marginTop: 20 },
  input: { backgroundColor: "#F8F8FB", padding: 20, borderRadius: 16, marginBottom: 10, width: 335, height: 56 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  halfWidth: { width: "48%" },
  payButton: { backgroundColor: "#25D482",width: 335, height: 62,  padding: 18, borderRadius: 16, alignItems: "center", marginTop: 20, gap: 10, alignSelf: "center" },
  payButtonText: { color: "white", fontWeight: "bold", fontSize: 16,  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F1F1",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,borderRadius: 16, marginBottom: 10, width: 335, height: 56
  },
  
  mastercardImage: {
    width: 30,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#F1F1F1",
  },
  
  scanIcon: {
    marginLeft: 10,
  },
  orderDetailsText: {
    textAlign: "center",
    fontSize: 12,
    color: "#B1B1B1",
    letterSpacing:0.02,
    marginBottom: 10, 
    marginTop: 20,
    fontWeight:400,
    width: 233,
    height: 34,
    alignSelf: "center"
  },
  cvvRow: {
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-between",
    gap: 4
  },
  
});
