def calculate_bmi():
    weight = float(input("Enter your weight in Kilograms\n"))
    height = float(input("Enter your height in meters\n"))
    bmi = weight/height**2
    return bmi



def interpret_bmi():
    bmi = calculate_bmi()
    if bmi <18.5:
        print(" Result ".center(50,"*"))
        print("you are underweight")
    elif bmi >=18.5 and bmi < 25:
        print(" Result ".center(50,"*"))
        print("you are in normal weight")
    elif bmi >=25 and bmi < 30:
        print(" Result ".center(50,"*"))
        print("you are in overweight")
    else:
        print(" Result ".center(50,"*"))
        print("you are obese stop eating")

interpret_bmi()