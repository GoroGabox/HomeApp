import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'

import {
	dirtImg,
	logImg,
	grassImg,
	glassImg,
	woodImg,
	lightConcreteImg,
	zincImg,
} from './images'

const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const groundTexture = new TextureLoader().load(grassImg)
const lightConcreteTexture = new TextureLoader().load(lightConcreteImg)
const zincTexture = new TextureLoader().load(zincImg)

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
lightConcreteTexture.magFilter = NearestFilter
lightConcreteTexture.wrapS = RepeatWrapping
lightConcreteTexture.wrapT = RepeatWrapping
zincTexture.magFilter = NearestFilter

export {
	dirtTexture,
	logTexture,
	grassTexture,
	glassTexture,
	woodTexture,
	groundTexture,
	lightConcreteTexture,
	zincTexture,
}