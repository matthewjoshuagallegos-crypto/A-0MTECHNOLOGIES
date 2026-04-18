#!/usr/bin/env node
import { execSync } from 'child_process';

console.log("A#0M Build3 lvl 21 Android SDK Initialized.");
console.log("Triggering Gradle assembly: ./gradlew assembleDebug");

try {
    execSync('./gradlew assembleDebug', { stdio: 'inherit' });
    console.log("Gradle build completed successfully.");
} catch (error) {
    console.error("Gradle build failed:", error);
    process.exit(1);
}
