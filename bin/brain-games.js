#!/usr/bin/env node

import { hi } from '../src/cli.js'
import { even } from './brain-even.js'

const name = hi()
even(name)
