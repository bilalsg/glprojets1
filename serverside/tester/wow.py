from faker import Faker

def generate_random_email():
    fake = Faker()
    return fake.email()

# Example usage
random_email = generate_random_email()
print(random_email)