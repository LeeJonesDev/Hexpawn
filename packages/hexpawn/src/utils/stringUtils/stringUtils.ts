const camelize = (str: string, isUpperCamelCase = false) => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
			if (isUpperCamelCase) {
				return word.toUpperCase();
			}

			return index === 0 ? word.toLowerCase() : word.toUpperCase();
		})
		.replace(/\s+/g, "")
		.replace(/-/g, "");
};

export { camelize };
