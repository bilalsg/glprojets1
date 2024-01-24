# from tester.models import *
import csv

with open('test.csv', 'r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    rows = list(csv_reader)
print(rows)

# for row in rows:
#     instance = Lawyer(
#         field1=row['field1'],
#         field2=row['field2'],
#         # Add other fields as needed
#     )
#     instance.save()