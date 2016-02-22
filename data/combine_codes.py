import csv

fhand = csv.reader(open("2004_obesity_data.csv", "rU"))
output_file = csv.writer(open("2004_obesity_data_abbr.csv", "w"))
headers = ["STATE_NAME", "COUNTY_NAME", "COMBO_CODE", "ADJPERCENT"]
output_file.writerow(headers)
skip = 0

for line in fhand :
	if skip == 0 :
		skip = 1
		continue
	line_output = []
	combo_code = ""
	line_output.append(line[0])
	line_output.append(line[1])
	if len(line[2]) == 1 :
		combo_code = "0" + str(line[2])
	else :
		combo_code = str(line[2])

	if len(line[3]) == 1 :
		combo_code = combo_code + "00" + str(line[3])
	elif len(line[3]) == 2 :
		combo_code = combo_code + "0" + str(line[3])
	elif len(line[3]) == 3 :
		combo_code = combo_code + str(line[3])

	line_output.append(combo_code)
	line_output.append(line[15])

	print line_output
	output_file.writerow(line_output)

