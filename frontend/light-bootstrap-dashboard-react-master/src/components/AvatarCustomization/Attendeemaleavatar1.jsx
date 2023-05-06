/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/attendeemaleavatar1.gltf
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useAvatarCustomization } from "contexts/AvatarCustomizationContext";

const Attendeemaleavatar1 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./avatars/attendeemaleavatar1.gltf"
  );
  const { actions, names } = useAnimations(animations, group);

  const {
    hairColor,
    setHairColor,
    shirtColor,
    setShirtColor,
    pantsColor,
    setPantsColor,
    shoesColor,
    setShoesColor,
    skinColor,
    setSkinColor,
  } = useAvatarCustomization();

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);

  useEffect(() => {
    if (hairColor == null) {
      setHairColor(`#${materials.Ch01_hair.color.getHexString()}`);
    }
    if (skinColor == null) {
      setSkinColor(`#${materials.Ch01_body.color.getHexString()}`);
    }

    if (shirtColor == null) {
      setShirtColor(`#${materials.Ch01_body.color.getHexString()}`);
    }

    if (pantsColor == null) {
      setPantsColor(`#${materials.Ch01_body.color.getHexString()}`);
    }

    if (shoesColor == null) {
      setShoesColor(`#${materials.Ch01_body.color.getHexString()}`);
    }
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig12Hips} />
          <skinnedMesh
            name="Ch01_Body"
            geometry={nodes.Ch01_Body.geometry}
            material={materials.Ch01_body}
            skeleton={nodes.Ch01_Body.skeleton}
          >
            <meshStandardMaterial {...materials.Ch01_body} color={skinColor} />
          </skinnedMesh>
          <skinnedMesh
            name="Ch01_Eyelashes"
            geometry={nodes.Ch01_Eyelashes.geometry}
            material={materials.Ch01_hair}
            skeleton={nodes.Ch01_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="Ch01_Pants"
            geometry={nodes.Ch01_Pants.geometry}
            material={materials.Ch01_body}
            skeleton={nodes.Ch01_Pants.skeleton}
          >
            <meshStandardMaterial {...materials.Ch01_body} color={pantsColor} />
          </skinnedMesh>
          <skinnedMesh
            name="Ch01_Shirt"
            geometry={nodes.Ch01_Shirt.geometry}
            material={materials.Ch01_body}
            skeleton={nodes.Ch01_Shirt.skeleton}
          >
            <meshStandardMaterial {...materials.Ch01_body} color={shirtColor} />
          </skinnedMesh>
          <skinnedMesh
            name="Ch01_Sneakers"
            geometry={nodes.Ch01_Sneakers.geometry}
            material={materials.Ch01_body}
            skeleton={nodes.Ch01_Sneakers.skeleton}
          >
            <meshStandardMaterial {...materials.Ch01_body} color={shoesColor} />
          </skinnedMesh>
        </group>
      </group>
    </group>
  );
};
export default Attendeemaleavatar1;

useGLTF.preload(".avatars/attendeemaleavatar1.gltf");
