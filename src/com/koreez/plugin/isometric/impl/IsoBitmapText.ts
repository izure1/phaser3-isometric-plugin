// ------------------------------------------------------------------------------
//  Copyright (c) 2018 Koreez LLC. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { Projector } from '../internal/Projector';
import { IsoObject } from './IsoObject';
import { IIsoGameObject } from '../api/IIsoGameObject';
import { Cube } from '../internal/Cube';
import { Point3 } from '../internal/Point3';
import { IIsoPhaserGameObject } from '../api/IIsoPhaserGameObject';

export class IsoBitmapText extends Phaser.GameObjects.BitmapText
  implements IIsoGameObject, IIsoPhaserGameObject {
  public static readonly ISO_BITMAP_TEXT: string = 'isoBitmapText';

  get isoX(): number {
    return this.__isoGameObject.isoX;
  }

  set isoX(value: number) {
    this.__isoGameObject.isoX = value;
  }

  get isoY(): number {
    return this.__isoGameObject.isoY;
  }

  set isoY(value: number) {
    this.__isoGameObject.isoY = value;
  }

  get isoZ(): number {
    return this.__isoGameObject.isoZ;
  }

  set isoZ(value: number) {
    this.__isoGameObject.isoZ = value;
  }

  get isoPosition(): Point3 {
    return this.__isoGameObject.isoPosition;
  }

  get isoBounds(): Cube {
    return this.__isoGameObject.isoBounds;
  }

  get snap(): number {
    return this.__isoGameObject.snap;
  }

  get projector(): Projector {
    return this.__isoGameObject.projector;
  }

  public setIsoText: (value: number) => {};

  constructor(
    scene: Phaser.Scene,
    projector: Projector,
    x: number,
    y: number,
    z: number,
    font: string,
    text?: string | string[],
    size?: number,
    align?: integer,
  ) {
    super(scene, x, y, font, text, size, align);

    this.__isoGameObject = new IsoObject(projector, this, x, y, z);
  }

  private __isoGameObject: IsoObject;

  public setIsoX: (v: number) => this = (value: number) => {
    this.isoY = value;
    return this;
  };

  public setIsoY: (v: number) => this = (value: number) => {
    this.isoY = value;
    return this;
  };

  public setIsoZ: (v: number) => this = (value: number) => {
    this.isoZ = value;
    return this;
  };
}
