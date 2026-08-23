import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';


@Component({
  selector: 'app-projects',
  imports: [
    MatCardModule,
    ButtonModule,
    ChipModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}