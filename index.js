'use strict'

strict.custom = custom
strict.strict = strict

module.exports = strict

function strict(reference, ...versions) {
	return custom(isStrictlyEqual, reference, ...versions)
}

function custom(isEqual, reference, ...versions) {
	const patch = {}
	for (const version of versions) {
		for (const key of Object.keys(version)) {
			if (!isEqual(reference[key], version[key])) {
				patch[key] = version[key]
			}
		}
	}
	return patch
}

function isStrictlyEqual(a, b) {
	return a === b
}
