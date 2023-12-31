import { camelize } from "@/utils/stringUtils/stringUtils";
import { expect, test } from "vitest";
import { TerrainIconKeys, TerrainIcons } from "./TerrainIcons";

test("test", () => {
	//fs string generated
	const TerrainComponent = TerrainIcons[TerrainIconKeys.desert];

	//string we test against
	const key = TerrainIconKeys[TerrainIconKeys.desert];

	const keyAsString = camelize(key, true);
	const filePath = `/@Icons/${keyAsString}.svg`;
	const fsPath = "/@fs";

	const fullPath = `${fsPath}${filePath}`;

	expect(TerrainComponent === fullPath).toBe(true);
});
