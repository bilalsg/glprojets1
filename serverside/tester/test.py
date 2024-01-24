# import os
# import django

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'settings')
# django.setup()
from models import Lawyer
import string
import random
import csv
import sys
import json
file_path = 'C:\\Users\\LENOVO\\Desktop\\gl\\serverside\\tester\\test.csv'



data_list = []  # List to store dictionaries



try:
    with open(file_path, 'r', encoding='utf-8') as csv_file:
        # Use DictReader to read the CSV file with headers
        csv_reader = csv.DictReader(csv_file)

        # Iterate over each row as a dictionary
        for row in csv_reader:
            data_dict = dict(row)  # Convert each row to a dictionary
            data_list.append(data_dict)  # Add the dictionary to the list

except FileNotFoundError:
    print(f"Error: File '{file_path}' not found.")
except Exception as e:
    print(f"Error: {e}")

# Print each dictionary as a JSON string using sys.stdout
json_list=[]
for data_dict in data_list:
    json_string = json.dumps(data_dict, ensure_ascii=False)
    json_list.append(json_string.encode(sys.stdout.encoding, 'replace'))

from faker import Faker

def generate_random_email():
    fake = Faker()
    return fake.email()

# Example usage
random_email = generate_random_email()
print(random_email)
def generate_random_password(length=12):
    # Characters for password generation (you can customize this)
    characters = string.ascii_letters + string.digits + string.punctuation
    
    # Generate a random password with the specified length
    password = ''.join(random.choice(characters) for _ in range(length))
    
    return password

# Example usage
random_password = generate_random_password()
list_of_rpswd = []
list_of_rpswd.append({'email':random_email,"pass":random_password})
print(random_password)
print(list_of_rpswd)
# for row in json_list:
#     instance = Lawyer(
#         field1=row['field1'],
#         field2=row['field2'],
#         # Add other fields as needed
#     )
#     instance.save()